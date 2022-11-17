// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber,
//false return
test('tries an invalid phone number invalid length', () => {
    expect(functions.isPhoneNumber("111")).toBe(false);
  });
//false return
test('tries an invalid phone number no -', () => {
    expect(functions.isPhoneNumber("1112223344")).toBe(false);
  });
//true return
test('tries a valid phone number america', () => {
    expect(functions.isPhoneNumber("111-222-3344")).toBe(true);
  });
//true return
test('tries a valid phone number, less area code', () => {
    expect(functions.isPhoneNumber("11-122-3344")).toBe(true);
  });

//isEmail, 
//false return
test('tries a website not an email', () => {
    expect(functions.isEmail("www.google.com")).toBe(false);
  });
//false return
test('tries an email with no symbols', () => {
    expect(functions.isEmail("myemailgmailcom")).toBe(false);
  });
//true return
test('tries a valid gmail', () => {
    expect(functions.isEmail("myemail@gmail.com")).toBe(true);
  });
//true return
test('tries a valid email not gmail', () => {
    expect(functions.isEmail("myemail@hotmail.co")).toBe(true);
  });

//isStrongPassword, 
//false return
test('tries a weak password first character is number', () => {
    expect(functions.isStrongPassword("122324")).toBe(false);
  });
//false return
test('tries a password with less than 4 characters and invalid character', () => {
    expect(functions.isStrongPassword("pa*")).toBe(false);
  });
//true return
test('tries a valid password, with 4 characters start letter', () => {
    expect(functions.isStrongPassword("pass")).toBe(true);
  });
//true return
test('tries a valid password, 15 characters with letter, number underscore', () => {
    expect(functions.isStrongPassword("pass1234_pass12")).toBe(true);
  });

//isDate, 
//false return
test('tries a date with no /', () => {
    expect(functions.isDate("12232004")).toBe(false);
  });
//false return
test('tries a date with not enough year numbers', () => {
    expect(functions.isDate("12/23/24")).toBe(false);
  });
//true return
test('tries a valid date with one month', () => {
    expect(functions.isDate("1/23/2004")).toBe(true);
  });
//true return
test('tries a valid date with one day', () => {
    expect(functions.isDate("12/2/2005")).toBe(true);
  });

//isHexColor
//false return
test('tries a hex with invalid characters', () => {
    expect(functions.isHexColor("***")).toBe(false);
  });
//false return
test('tries a hex with too many characters', () => {
    expect(functions.isHexColor("ABCDEFG")).toBe(false);
  });
//true return
test('tries a valid 6 letter hex', () => {
    expect(functions.isHexColor("FFAFFD")).toBe(true);
  });
//true return
test('tries a valid 3 letter hex', () => {
    expect(functions.isHexColor("ABF")).toBe(true);
  });