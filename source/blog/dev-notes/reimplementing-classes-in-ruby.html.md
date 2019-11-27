---
title: Reimplementing classes in ruby
author: dearshrewdwit
date: 2019-06-12
gh_issue_number: 11
---


A short challenge to reimplement the class keyword in ruby.

I used `Kernel#binding` to set scope.

Have a look [here](https://gist.github.com/dearshrewdwit/8ce0da6f1b1a52fb700f66263240047e) for the gist.

Pretty, huh?

---

```ruby
module BasicClass
  def self.new(parent_klass = nil, &block)
    klass = lambda do
      class_scope = {
        ancestry: [klass, self],
        instance_methods: {},
        methods: {
          define: lambda { |name, &block| class_scope[:instance_methods][name] = block },
          new: lambda do |*args|
            instance = lambda do
              instance_scope = {
                class_methods: class_scope[:methods].dup,
                methods: class_scope[:instance_methods].dup,
                instance_vars: {}
              }
              instance_scope[:methods][:initialize].call(instance_scope, *args)
              binding
            end
            instance_scope = instance.call.local_variable_get('instance_scope')
            instance
          end
        },
      }
      class_scope
    end
    class_scope = klass.call
    block.call(class_scope)
    klass
  end
end

DockingStation = BasicClass.new do |class_scope|
  class_scope[:methods][:define].call(:initialize) do |instance_scope, capacity=20|
    instance_scope[:instance_vars]['@capacity'] = capacity
    instance_scope[:instance_vars]['@bikes'] = []
  end

  class_scope[:methods][:define].call(:bikes) do |instance_scope|
    instance_scope[:instance_vars]['@bikes']
  end

  class_scope[:methods][:define].call(:dock) do |instance_scope, bike|
    instance_scope[:instance_vars]['@bikes'] << bike
  end

  class_scope[:methods][:define].call(:release_bike) do |instance_scope|
    instance_scope[:instance_vars]['@bikes'].pop
  end
end
```
