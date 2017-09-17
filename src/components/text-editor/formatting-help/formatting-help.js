import React from 'react';
import Tr from "./formatting-help-tr";
import TrList from "./formatting-help-list-tr";

const FormattingHelp = () => {
  return (
      <table className="formatting-help default-style">
        <thead>
          <tr>
            <td>You type:</td>
            <td>You see:</td>
          </tr>
        </thead>
        <tbody>
          <Tr abbr="b" tool="bold" />
          <Tr abbr="i" tool="italic" />
          <Tr abbr="u" tool="underline" />
          <Tr abbr="s" tool="strikethrough" />
          <Tr abbr="url" tool="link" />
          <Tr abbr="q" tool="quote" />
          <Tr abbr="em" tool="embed" />
          <Tr abbr="card" tool="Malygos" />
          <TrList abbr="ol" tool="ordered list"/>
          <TrList abbr="ul" tool="unordered list"/>
        </tbody>
      </table>
  )
};

export default FormattingHelp;