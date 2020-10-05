export const heightLandscape: number = 230;
export const widthLandscape: number = 320;
export const heightPortrait: number = 370;
export const widthPortrait: number = 230;
export const dimensions = (
  element: Element,
  isImagePortrait: boolean
): [number, number] => {
  const data: DOMRect = element.getBoundingClientRect();

  const distanceFromLeft = updateLeftDistanceFromTargetCenter(
    data.left + data.width / 2,
    data,
    isImagePortrait
  );
  const distanceFromTop = updateTopDistanceFromTargetCenter(
    window.scrollY + data.top + data.height / 2,
    isImagePortrait
  );
  return [distanceFromLeft, distanceFromTop];
};

const updateTopDistanceFromTargetCenter = (
  targetTopCenter: number,
  isImagePortrait: boolean
): number => {
  let topPosition = targetTopCenter;
  if (isImagePortrait) {
    topPosition = targetTopCenter - heightPortrait / 2;
  } else {
    topPosition = targetTopCenter - heightLandscape / 2;
  }
  return topPosition;
};

const updateLeftDistanceFromTargetCenter = (
  targetLeftCenter: number,
  data: DOMRect,
  isImagePortrait: boolean
): number => {
  let leftPosition = targetLeftCenter;
  if (isImagePortrait) {
    if (targetLeftCenter - widthPortrait / 2 > 0) {
      leftPosition = targetLeftCenter - widthPortrait / 2;
    } else {
      leftPosition = data.left;
    }

    if (window.innerWidth < data.width + data.left) {
      leftPosition = window.innerWidth - widthPortrait;
    }
  } else {
    if (targetLeftCenter - widthLandscape / 2 > 0) {
      leftPosition = targetLeftCenter - widthLandscape / 2;
    } else {
      leftPosition = data.left;
    }

    if (window.innerWidth < data.width + data.left) {
      leftPosition = window.innerWidth - widthLandscape;
    }
  }
  return leftPosition;
};
