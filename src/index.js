import React from 'react';

import CuButton from './components/Button/';
import CuCard from './components/Card/';
import CuInput from './components/Input/';
import CuNavBar from './components/NavBar/';
import { CuTable, CuTd, CuTr } from './components/Table/';
import { CuSelect, CuOption } from './components/Dropdown/';

export const Button = CuButton;
export const Card = CuCard;
export const Input = CuInput;
export const NavBar = CuNavBar;
export const Option = CuOption;
export const Select = CuSelect;
export const Table = CuTable;
export const Td = CuTd;
export const Tr = CuTr;

const ThemeExample = () => (
  <div>
    <h1>CladUi</h1>
      Theme Examples & Options

    <h2>Possible Imports</h2>

    <ul>
      <li>Button</li>
      <li>Card</li>
      <li>Input</li>
      <li>NavBar</li>
      <li>Option</li>
      <li>Select</li>
      <li>Table</li>
      <ul>
        <li>Td</li>
        <li>Tr</li>
      </ul>
    </ul>

    <h2>Color Options</h2>

    <div className="clad alert">alert</div>
    <div className="clad default">default</div>
    <div className="clad primary">primary</div>
    <div className="clad secondary">secondary</div>
    <div className="clad tertiary">tertiary</div>

    <div className="clad bg-alert">bg-alert</div>
    <div className="clad bg-default">bg-default</div>
    <div className="clad bg-primary">bg-primary</div>
    <div className="clad bg-secondary">bg-secondary</div>
    <div className="clad bg-tertiary">bg-tertiary</div>

    <h2>Examples</h2>

    <hr />
    <h3>Buttons</h3>

    <p>
      <Button>Default</Button>
      <code>{'<Button>Default</Button>'}</code>
    </p>

    <p>
      <Button rank="primary">Primary</Button>
      <code>{'<Button rank="primary">Primary</Button>'}</code>
    </p>

    <p>
      <Button rank="secondary">Secondary</Button>
      <code>{'<Button rank="secondary">Secondary</Button>'}</code>
    </p>

    <p>
      <Button rank="tertiary">Tertiary</Button>
      <code>{'<Button rank="tertiary">Tertiary</Button>'}</code>
    </p>

    <p>
      <Button rank="alert">Alert</Button>
      <code>{'<Button rank="alert">Alert</Button>'}</code>
    </p>

    <hr />

  </div>
);

export default ThemeExample;
