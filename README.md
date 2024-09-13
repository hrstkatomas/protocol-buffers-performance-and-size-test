# Protocol buffers performance and size test

Unlike JSON and XML, Protobufs are not intended to be easily read by humans (which is actually something we wanted in FS to avoid data scraping), as they use a binary format for data serialization.
However, Protobuf encoding is smaller, faster, and simpler than JSON and XML.


Pros
* Faster and smaller than most serialization encodings, like JSON or XML
* Handle breaking changes better than any other serialization mechanism by enforcing deprecation rather than completely removing a field
* Language- and platform-neutral, making them a good mechanism for transferring data between systems with different language implementations
* Support a wider range of data types than JSON, such as enums

Cons
* Lack human readability - I see this as a benefit
* Have limited support for complex data types, such as maps and nested objects
* Place restrictions on changing structured data, making collaboration between multiple authors or teams somewhat challenging

TypeScript is a great option for Protobuf serialization because it’s strongly typed. This strict typing is a good match for Protobuf’s message structures and allows us to work with clearly defined data models and easier-to-maintain code that is less prone to runtime errors.


## Running this project
install protobuf
```bash
brew install protobuf@3
```
```bash
brew link --overwrite protobuf@3
```
note to self: install all this in a docker container

Compile protocol buffer schemas
```bash
./protocBuild.sh
```

Build little vanilla client app
```bash
npm run build
```

Run dev server
```bash
npm run dev
```


### notes unde line
Use npm for the project. Bun does not yet support compresion streams.