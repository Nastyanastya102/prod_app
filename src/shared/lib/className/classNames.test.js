import { classNames } from "./classNames";

describe('classNames', () => {
    test('With only className', () => {
      expect(classNames('someClassName')).toBe('someClassName');
    });

    test('With additional classes', () => {
      expect(classNames('someClassName', {}, ['class1, class2'])).toBe('someClassName class1, class2');
    })

    test('With mods', () => {
      expect(
        classNames('someClassName', {hovered: true, scrollable: true}, ['class1, class2']))
        .toBe('someClassName class1, class2 hovered scrollable');
    })

    test('With mods false', () => {
      expect(
        classNames('someClassName', {hovered: true, scrollable: false}, ['class1, class2']))
        .toBe('someClassName class1, class2 hovered');
    })


    test('With mods undefined', () => {
      expect(
        classNames('someClassName', {hovered: true, scrollable: undefined}, ['class1, class2']))
        .toBe('someClassName class1, class2 hovered');
    })
})