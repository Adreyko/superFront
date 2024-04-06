import { clsx } from './clsx'

describe('clsx', () => {
test('only with main class', () => {
    expect(clsx('cls')).toBe('cls')
    })

test('with additional class', () => {
    expect(clsx('cls', {}, ['additional'])).toBe('cls additional')
    })
test('with mods class', () => {
    expect(clsx('cls', { mod: true })).toBe('cls mod')
    })
test('with all classes', () => {
    expect(clsx('cls', { mod: true }, ['additional'])).toBe('cls additional mod')
    })
})
