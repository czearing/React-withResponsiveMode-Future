import * as React from "react";
import { useResponsiveMode } from "./useResponsiveMode";
import { ResponsiveMode } from "./withResponsiveMode.types";

export const withResponsiveMode = <
  TProps extends { responsiveMode?: ResponsiveMode }
>(
  ComposedComponent: new (props: TProps, ...args: any[]) => React.Component<
    TProps
  >
): any => {
  const Component = (props: TProps) => {
    const ref = React.useRef(null);
    const responsiveMode = useResponsiveMode(ref);

    return (
      <ComposedComponent
        ref={ref}
        responsiveMode={responsiveMode}
        {...props as any}
      />
    );
  };

  Component.displayName = (ComposedComponent as any).displayName;

  return Component;
};
