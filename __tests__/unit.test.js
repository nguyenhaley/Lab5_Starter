// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//testing isPhoneNumber()
test('phone number script 1', () => {
  expect(isPhoneNumber('818-319-3961')).toBe(true);
});
test('phone number script 2', () => {
  expect(isPhoneNumber('(626)215-3364')).toBe(true);
});
test('phone number script 3', () => {
  expect(isPhoneNumber('818-319-39')).toBe(false);
});
test('phone number script 4', () => {
  expect(isPhoneNumber('626-4')).toBe(false);
});

// testing isEmail()
test('email script 1', () => {
  expect(isEmail('haleynguyen@gmail.com')).toBe(true);
});
test('email script 2', () => {
  expect(isEmail('lucylee@yahoo.com')).toBe(true);
});
test('email script 3', () => {
  expect(isEmail('1245pickles')).toBe(false);
});
test('email script 4', () => {
  expect(isEmail('.com')).toBe(false);
});

// testing isStrongPassword
test('password script 1', () => {
  expect(isStrongPassword('youllNeverKnow2')).toBe(true);
});
test('password script 2', () => {
  expect(isStrongPassword('haleyNguyen_1')).toBe(true);
});
test('password script 3', () => {
  expect(isStrongPassword('156tbd')).toBe(false);
});
test('password script 4', () => {
  expect(isStrongPassword('_cantfigureitout')).toBe(false);
});

// testing isDate
test('date script 1', () => {
  expect(isDate('08/21/2004')).toBe(true);
});
test('date script 2', () => {
  expect(isDate('9/15/2003')).toBe(true);
});
test('date script 3', () => {
  expect(isDate('111/222/668')).toBe(false);
});
test('date script 4', () => {
  expect(isDate('1/2/5')).toBe(false);
});

// testing isHexColor
test('hex color script 1', () => {
  expect(isHexColor('#666CC4')).toBe(true);
});
test('hex color script 2', () => {
  expect(isHexColor('#C466B0')).toBe(true);
});
test('hex color script 3', () => {
  expect(isHexColor('#5990')).toBe(false);
});
test('hex color script 4', () => {
  expect(isHexColor('#90')).toBe(false);
});