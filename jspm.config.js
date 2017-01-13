SystemJS.config({
  devConfig: {
    'map': {
      'angular-mocks': 'npm:angular-mocks@1.6.1'
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    },
    '.tmp': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json',
    'bower:*.json'
  ],
  map: {
    '@types/angular': 'npm:@types/angular@1.5.23',
    '@types/angular-route': 'npm:@types/angular-route@1.3.3',
    'angular': 'github:angular/bower-angular@1.6.1',
    'angular-animate': 'github:angular/bower-angular-animate@1.6.1',
    'angular-crumble': 'bower:angular-crumble@0.2.2',
    'angular-flatpickr': 'npm:angular-flatpickr@2.0.0',
    'angular-gantt': 'bower:angular-gantt@1.3.0',
    'angular-moment': 'npm:angular-moment@1.0.1',
    'angular-resource': 'github:angular/bower-angular-resource@1.6.1',
    'angular-route': 'github:angular/bower-angular-route@1.6.1',
    'angular-ui-tree': 'bower:angular-ui-tree@2.22.2',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'bootstrap': 'bower:bootstrap@3.3.7',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'flatpickr': 'npm:flatpickr@2.3.4',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'moment': 'npm:moment@2.17.1',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'ng-infinite-scroll': 'npm:ng-infinite-scroll@1.3.0',
    'ng-table': 'npm:ng-table@3.1.0',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'ts': 'github:frankwallis/plugin-typescript@5.3.3',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha'
  },
  packages: {
    'npm:typescript@2.1.4': {
      'map': {
        'source-map-support': 'npm:source-map-support@0.4.8'
      }
    },
    'npm:source-map-support@0.4.8': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'create-hash': 'npm:create-hash@1.1.2',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'inherits': 'npm:inherits@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'randombytes': 'npm:randombytes@2.0.3',
        'public-encrypt': 'npm:public-encrypt@4.0.0'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.2',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'miller-rabin': 'npm:miller-rabin@4.0.0'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'bn.js': 'npm:bn.js@4.11.6',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.2'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.2.0',
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.8'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.2'
      }
    },
    'npm:readable-stream@2.2.2': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:frankwallis/plugin-typescript@5.3.3': {
      'map': {
        'typescript': 'npm:typescript@2.1.4'
      }
    },
    'github:angular/bower-angular-resource@1.6.1': {
      'map': {
        'angular': 'github:angular/bower-angular@1.6.1'
      }
    },
    'github:angular/bower-angular-route@1.6.1': {
      'map': {
        'angular': 'github:angular/bower-angular@1.6.1'
      }
    },
    'npm:angular-moment@1.0.1': {
      'map': {
        'moment': 'npm:moment@2.17.1'
      }
    },
    'npm:ng-table@3.1.0': {
      'map': {
        '@types/angular': 'npm:@types/angular@1.5.23'
      }
    },
    'npm:@types/angular-route@1.3.3': {
      'map': {
        '@types/angular': 'npm:@types/angular@1.5.23'
      }
    },
    'github:angular/bower-angular-animate@1.6.1': {
      'map': {
        'angular': 'github:angular/bower-angular@1.6.1'
      }
    },
    'npm:@types/angular@1.5.23': {
      'map': {
        '@types/jquery': 'npm:@types/jquery@2.0.39'
      }
    },
    'bower:angular-crumble@0.2.2': {
      'map': {
        'angular-route': 'bower:angular-route@1.6.1',
        'angular': 'bower:angular@1.6.1'
      }
    },
    'bower:angular-route@1.6.1': {
      'map': {
        'angular': 'bower:angular@1.6.1'
      }
    },
    'bower:angular-gantt@1.3.0': {
      'map': {
        'angular-moment': 'bower:angular-moment@1.0.1',
        'css': 'github:systemjs/plugin-css@0.1.32',
        'angular': 'bower:angular@1.6.1'
      }
    },
    'bower:angular-moment@1.0.1': {
      'map': {
        'moment': 'bower:moment@2.17.1',
        'angular': 'bower:angular@1.6.1'
      }
    },
    'bower:angular-ui-tree@2.22.2': {
      'map': {
        'angular': 'bower:angular@1.5.10',
        'css': 'github:systemjs/plugin-css@0.1.32'
      }
    },
    'bower:bootstrap@3.3.7': {
      'map': {
        'jquery': 'bower:jquery@3.1.1'
      }
    },
    'npm:flatpickr@2.3.4': {
      'map': {
        'css': 'github:systemjs/plugin-css@0.1.32'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    }
  }
});
