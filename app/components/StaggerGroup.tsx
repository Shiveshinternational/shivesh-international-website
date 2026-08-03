"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

type StaggerGroupProps = {
  children: ReactNode;
  delayStep?: number;
  startDelay?: number;
};

type DelayCompatibleProps = {
  delay?: number;
};

export default function StaggerGroup({
  children,
  delayStep = 120,
  startDelay = 0,
}: StaggerGroupProps) {
  const staggeredChildren = Children.map(children, (child, index) => {
    if (!isValidElement<DelayCompatibleProps>(child)) {
      return child;
    }

    return cloneElement(
      child as ReactElement<DelayCompatibleProps>,
      {
        delay: startDelay + index * delayStep,
      }
    );
  });

  return <>{staggeredChildren}</>;
}