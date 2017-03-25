# Ebay of insurance with 15 lines of smart contract code.

## Usage

[Demo video](https://youtu.be/ylQOv_t8xlw)

## Dependencies

- nodejs
- testrpc (3.0.3)
- truffle (3.2.1)

## How to setup

### In terminal one

```
testrpc
```

### In terminal two

```
truffle migrate
```

### In terminal three (customer)

```
truffle exec scripts/customer.js McDonald
```

### In terminal four (insurer)

```
truffle exec scripts/insurer.js AIG
```

### In terminal five (insurer)

```
truffle exec scripts/insurer.js Allianz
```
