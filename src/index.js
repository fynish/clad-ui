import React from 'react';

import CuButton from './components/Button/';
import CuCard from './components/Card/';
import CuColumn from './components/Column/';
import CuInput from './components/Input/';
import CuLoading from './components/Loading/';
import CuNavBar from './components/NavBar/';
import { CuTable, CuTbody, CuTd, CuTfoot, CuThead, CuTr } from './components/Table/';
import { CuSelect, CuOption } from './components/Dropdown/';
import CuRow from './components/Row/';


export const Button = CuButton;
export const Card = CuCard;
export const Column = CuColumn;
export const Input = CuInput;
export const Loading = CuLoading;
export const NavBar = CuNavBar;
export const Option = CuOption;
export const Row = CuRow;
export const Select = CuSelect;
export const Table = CuTable;
export const Tbody = CuTbody;
export const Td = CuTd;
export const Tfoot = CuTfoot;
export const Thead = CuThead;
export const Tr = CuTr;

const ThemeExample = () => (
  <div>
    <h1>CladUi</h1>
      Theme Examples & Options

    <h2>Possible Imports</h2>

    <ul>
      <li>Button</li>
      <li>Card</li>
      <li>Column</li>
      <li>Input</li>
      <li>NavBar</li>
      <li>Option</li>
      <li>Row</li>
      <li>Select</li>
      <li>Table</li>
      <ul>
        <li>Thead</li>
        <li>Tbody</li>
        <li>Tfoot</li>
        <li>Tr</li>
        <li>Td</li>
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
    <h3>Row, Columns, Cards</h3>
    <p>
      Columns auto resize to fill the row and take an
      optional <code>flex</code> parameter that allows the column
      to take up relatively more space than the others (defaults
      to <code>&#39;1&#39;</code>)
    </p>
    <Row>
      <Column>
        <Card>Column 1 - Card 1</Card>
      </Column>
      <Column>
        <Card>Column 2 - Card 2</Card>
      </Column>
      <Column>
        <Card>Column 3 - Card 3</Card>
      </Column>

      <Column flex="2">
        <Card>Column 4 - Card 4 (flex 2)</Card>
      </Column>
      <Column>
        <Card>Column 5 - Card 5</Card>
      </Column>
      <Column flex="3">
        <Card>Column 6 - Card 6 (flex 3)</Card>
      </Column>

    </Row>

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
    <h3>Table</h3>
    <Table>
      <Thead>
        <Tr>
          <Td>Table</Td>
          <Td>Import</Td>
          <Td>(Table)</Td>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Table</Td>
          <Td>Header</Td>
          <Td>(Thead)</Td>
        </Tr>
        <Tr>
          <Td>Table</Td>
          <Td>Body</Td>
          <Td>(Tbody)</Td>
        </Tr>
        <Tr>
          <Td>Table</Td>
          <Td>Footer</Td>
          <Td>(Tfoot)</Td>
        </Tr>
        <Tr>
          <Td>Table</Td>
          <Td>Row</Td>
          <Td>(Tr)</Td>
        </Tr>
        <Tr>
          <Td>Table</Td>
          <Td>Data</Td>
          <Td>(Td)</Td>
        </Tr>
      </Tbody>
    </Table>

    <hr />
    <h3>Loading</h3>
    <p>
      <b>Loading</b> <i>(l)</i>: <br />
      <Loading size="l" />
    </p>
    <p>
      <b>Loading (inverse)</b> <i>(m)</i>: <br />
      <Loading size="m" inverse />
    </p>

    <hr />
    <h3>Assets (Glyphs)</h3>
    <Table>
      <Thead>
        <Tr>
          <Td>Size</Td>
          <Td>Ex Glyph</Td>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>xxs</Td>
          <Td><Loading size="xxs" /></Td>
        </Tr>
        <Tr>
          <Td>xs</Td>
          <Td><Loading size="xs" inverse /></Td>
        </Tr>
        <Tr>
          <Td>s</Td>
          <Td><Loading size="s" /></Td>
        </Tr>
        <Tr>
          <Td>m</Td>
          <Td><Loading size="m" inverse /></Td>
        </Tr>
        <Tr>
          <Td>l</Td>
          <Td><Loading size="l" /></Td>
        </Tr>
        <Tr>
          <Td>xl</Td>
          <Td><Loading size="xl" inverse /></Td>
        </Tr>
        <Tr>
          <Td>xxl</Td>
          <Td><Loading size="xxl" /></Td>
        </Tr>
        <Tr>
          <Td>xxxl</Td>
          <Td><Loading size="xxxl" inverse /></Td>
        </Tr>
      </Tbody>
    </Table>

  </div>
);

export default ThemeExample;
