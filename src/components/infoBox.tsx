import { type ReactNode } from "react";

type HintBoxProps = {
  mode: "Hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "Error";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;

  if (mode === "Hint") {
    return <aside className="infobox infobox-hint">{children}</aside>;
  }

    const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>{children}</p>
    </aside>
  );
}
