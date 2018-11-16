# Adonisjs API - Node.js ORMs benchmark

This project was created for testing purpose of some popular ORMs for Node.js

## Benchmark

The test, consists in create an endpoint for each orm to show the data of contacts records from a pre populated `Postgresql` database.

The data to show, is 1k of contact records, each contact have 2 emails, 2 phones, and 2 addresses.

The `JSON` for a contact, looks like this:

```json
{
  "id": 1,
  "uuid": "06492b1d-b48d-4a84-8a1d-7a5fe08457b2",
  "name": "Rosetta Daniel",
  "created_at": "2018-11-16T16:36:06.000Z",
  "updated_at": "2018-11-16T16:36:06.000Z",
  "emails": [
    {
      "id": 2,
      "uuid": "e5229405-be3b-4742-845d-629c6def7638",
      "contact_id": 1,
      "account": "kulko@enaribtij.rw",
      "created_at": "2018-11-16T16:36:06.000Z",
      "updated_at": "2018-11-16T16:36:06.000Z"
    },
    {
      "id": 1,
      "uuid": "f329284e-9196-4e60-872f-f77efbd6c031",
      "contact_id": 1,
      "account": "sesih@bizke.mc",
      "created_at": "2018-11-16T16:36:06.000Z",
      "updated_at": "2018-11-16T16:36:06.000Z"
    }
  ],
  "phones": [
    {
      "id": 2,
      "uuid": "b6df963b-ff84-4c8f-b5f8-381f15be0a2e",
      "contact_id": 1,
      "number": "(974) 958-9465",
      "created_at": "2018-11-16T16:36:06.000Z",
      "updated_at": "2018-11-16T16:36:06.000Z"
    },
    {
      "id": 1,
      "uuid": "eed29805-8f0f-4d9a-9760-e1cc9f888ca1",
      "contact_id": 1,
      "number": "(637) 899-1963",
      "created_at": "2018-11-16T16:36:06.000Z",
      "updated_at": "2018-11-16T16:36:06.000Z"
    }
  ],
  "addresses": [
    {
      "id": 2,
      "uuid": "6eab1b1b-4cb6-4b68-8ad0-ec84ff4d135c",
      "contact_id": 1,
      "description": "481 Oghic Lane",
      "created_at": "2018-11-16T16:36:06.000Z",
      "updated_at": "2018-11-16T16:36:06.000Z"
    },
    {
      "id": 1,
      "uuid": "14826e60-1cfa-4b3a-986f-9326012cd671",
      "contact_id": 1,
      "description": "1878 Hohzaj Trail",
      "created_at": "2018-11-16T16:36:06.000Z",
      "updated_at": "2018-11-16T16:36:06.000Z"
    }
  ]
}
```

For testing each endpoint, we will be using [autocannon](https://www.npmjs.com/package/autocannon) package with default configuration.

We will run autocannon 10 times on each endpoint and take the best score during that time.

#### Machine specs, where the test were run:

```
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
Address sizes:       39 bits physical, 48 bits virtual
CPU(s):              8
On-line CPU(s) list: 0-7
Thread(s) per core:  2
Core(s) per socket:  4
Socket(s):           1
NUMA node(s):        1
Vendor ID:           GenuineIntel
CPU family:          6
Model:               94
Model name:          Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz
Stepping:            3
CPU MHz:             800.000
CPU max MHz:         3500.0000
CPU min MHz:         800.0000
BogoMIPS:            5186.00
Virtualization:      VT-x
L1d cache:           32K
L1i cache:           32K
L2 cache:            256K
L3 cache:            6144K
NUMA node0 CPU(s):   0-7
Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lmconstant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf tsc_known_freq pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg fmacx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single pti ssbd ibrsibpb stibp tpr_shadow vnmi flexpriority ept vpid fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp flush_l1d
```


## Results

### [TypeORM](https://github.com/typeorm/typeorm)

**Best score**

```
Running 10s test @ http://localhost:3000/api/v1/typeorm/contacts
10 connections

Stat    2.5%    50%     97.5%   99%     Avg        Stdev     Max
Latency 1367 ms 1565 ms 4040 ms 4447 ms 1816.19 ms 695.85 ms 4447.29 ms

Stat      1%  2.5% 50%     97.5%   Avg     Stdev   Min
Req/Sec   0   0    4       9       4.8     2.68    3
Bytes/Sec 0 B 0 B  5.18 MB 11.6 MB 6.21 MB 3.46 MB 3.88 MB

Req/Bytes counts sampled once per second.

48 requests in 10.06s, 62.1 MB read
```

### [Adonis - Lucid ORM](https://github.com/adonisjs/adonis-lucid)



**Best score**

```
Running 10s test @ http://localhost:3000/api/v1/lucid/contacts
10 connections

Stat    2.5%    50%     97.5%   99%     Avg        Stdev     Max
Latency 1198 ms 1406 ms 3152 ms 3946 ms 1676.86 ms 639.48 ms 3946.07 ms

Stat      1%  2.5% 50%     97.5%   Avg     Stdev   Min
Req/Sec   0   0    6       8       5.6     2.54    3
Bytes/Sec 0 B 0 B  7.77 MB 10.4 MB 7.25 MB 3.28 MB 3.88 MB

Req/Bytes counts sampled once per second.

56 requests in 10.07s, 72.4 MB read
```

### [Sequelize ORM](https://github.com/sequelize/sequelize)

**Best score**

```
Running 10s test @ http://localhost:3000/api/v1/sequelize/contacts
10 connections

Stat    2.5%   50%     97.5%   99%     Avg        Stdev     Max
Latency 755 ms 1023 ms 2508 ms 2517 ms 1233.28 ms 476.46 ms 2517.72 ms

Stat      1%  2.5% 50%     97.5%   Avg     Stdev   Min
Req/Sec   0   0    8       12      7.7     3.14    6
Bytes/Sec 0 B 0 B  10.4 MB 15.5 MB 9.96 MB 4.05 MB 7.76 MB

Req/Bytes counts sampled once per second.

77 requests in 10.05s, 99.6 MB read
```

### [Objection.js ORM](https://github.com/Vincit/objection.js)



**Best score**

```
Running 10s test @ http://localhost:3000/api/v1/objection/contacts
10 connections

Stat    2.5%   50%    97.5%  99%    Avg       Stdev    Max
Latency 191 ms 270 ms 604 ms 635 ms 322.62 ms 123.5 ms 691.3 ms

Stat      1%      2.5%    50%     97.5%   Avg     Stdev   Min
Req/Sec   24      24      31      36      30.4    2.77    24
Bytes/Sec 31.1 MB 31.1 MB 40.1 MB 46.6 MB 39.3 MB 3.57 MB 31 MB

Req/Bytes counts sampled once per second.

304 requests in 10.06s, 393 MB read
```



## Development


To run the test your self, follow the next steps:


## Build the docker image

Once you have clonned this repo, run the next command in the root of the project

```
docker-compose build
```

## Setup 


### Migrations

Run the following command to run startup migrations.

```js
docker-compose run --rm workspace adonis migration:run
```

### Seeds

Run the following command to populate the database.

```
docker-compose run --rm workspace adonis seed
```



## Start the server

```
docker-compose up
```