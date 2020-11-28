import Animated, { Easing } from 'react-native-reanimated';

const {
  cond,
  Value,
  set,
  clockRunning,
  startClock,
  stopClock,
  timing,
} = Animated;

export const removeAccents = (value: string) =>
  value
    .toLowerCase()
    .replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
    .replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
    .replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
    .replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
    .replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
    .replace(new RegExp('[Ç]', 'gi'), 'c');

export const searchIndexInText = (value: string, valueToCompare: string) =>
  removeAccents(value).indexOf(removeAccents(valueToCompare));

export const searchTextInArray = (list: string[], valueToCompare: string) => {
  const filteredList = list.reduce((acc: string[], curr) => {
    if (searchIndexInText(curr, valueToCompare) > -1) acc.push(curr);
    return acc;
  }, []);

  filteredList.sort((a, b) => {
    const indexOfA = searchIndexInText(a, valueToCompare);
    const indexOfB = searchIndexInText(b, valueToCompare);

    if (indexOfA < indexOfB) return -1;

    if (indexOfA > indexOfB) return 1;

    return 0;
  });

  return filteredList;
};

export const runTiming = (
  clock: Animated.Clock,
  value: Animated.Value<number>,
  dest: number | Animated.Value<number>,
) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 200,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ];
};
