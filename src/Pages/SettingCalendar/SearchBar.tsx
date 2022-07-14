import React from "react";
import {
  NavButton,
  NavBarSt,
  ButtonSave,
  BackButton,
  SettingTable,
  Table,
  TableHead,
  Head1,
  Head2,
  SettingDate,
  Setting1,
  Setting2,
  Setting3,
  Setting4,
  Setting5,
  Setting6,
  SettingName
} from "./SearchBar.styled";

const SearchBar: React.FC = () => {
  return (
    <div>
      <NavBarSt>
        <NavButton>
          <BackButton> Back</BackButton>
          <ButtonSave>Save Changes</ButtonSave>
        </NavButton>
      </NavBarSt>
      <SettingTable>
        <Table>
          <TableHead>
            <Head1>ชื่อวันหยุด</Head1>
            <Head2>วันที่เริ่มวันหยุด</Head2>
          </TableHead>
          <Setting1>
            <SettingName>Alfreds Futterkiste</SettingName>
            <SettingDate>
              <span>1</span>
              <span>มกราคม</span>
              <span>1 วัน </span>
            </SettingDate>
          </Setting1>
          <Setting2>
          <td>Alfreds Futterkiste</td>
          <SettingDate>
              <span>1</span>
              <span>มกราคม </span>
              <span>1 วัน </span>
            </SettingDate>
          </Setting2>
          <Setting3>
          <td>Alfreds Futterkiste</td>
          <SettingDate>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
            </SettingDate>
          </Setting3>
          <Setting4>
          <td>Alfreds Futterkiste</td>
          <SettingDate>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
            </SettingDate>
          </Setting4>
          <Setting5>
          <td>Alfreds Futterkiste</td>
          <SettingDate>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
            </SettingDate>
          </Setting5>
          <Setting6>
          <td>Alfreds Futterkiste</td>
          <SettingDate>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
              <span>Maria Anders</span>
            </SettingDate>
          </Setting6>
        </Table>
      </SettingTable>
    </div>
  );
};

export default SearchBar;
