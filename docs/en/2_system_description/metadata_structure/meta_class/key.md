#### [Content](/docs/en/index.md)

### The previous page: [Structure](isstruct.md)

# The key attributes

Each class should have a key attribute (the `" key "` field in the general part of the meta class). Without specified key attribute the application will not function correctly.

## Types of key fields

1. Guid - "Global identifier [12]". 
2. "String [0]". 
3. "Integer [6]". 

## Key attribute requirements

When creating the key attribute meta, set the `" unique "` and `"autoassigned"` fields to `true`. Disable the empty value by setting `" nullable "` to `false`.

If the attribute is not automatically generated, then set the `"autoassigned"` field to `false`, so the field must be set by the operator when creating. 

### The next page: [Semantic attributes](semantic.md)
--------------------------------------------------------------------------  


 #### [Licence](/LICENSE) &ensp;  [Contact us](https://iondv.com/portal/contacts) &ensp;  [Russian](/docs/ru/2_system_description/metadata_structure/meta_class/key.md) &ensp;
<div><img src="https://mc.iondv.com/watch/local/docs/framework" style="position:absolute; left:-9999px;" height=1 width=1 alt="iondv metrics"></div>       



--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV"**.  
All rights reserved.  