import React from 'react';
import { MoneyType } from "./Bankomat";
import styled from "styled-components";

type CurrentBankomatPropsType = {
  money: MoneyType
}

export const CurrentBankomat: React.FC<CurrentBankomatPropsType> = ({ money }: CurrentBankomatPropsType) => {
  return (
    <div>
      <Banknote color={money.banknote === "USD" ? "aquamarine" : "lightskyblue"}>
        <Name>{money.banknote}</Name>
        <Nominal>{money.nominal}</Nominal>
      </Banknote>
    </div>
  );
};

type BanknoteType = {
  color: "aquamarine" | "lightskyblue"
}

const Banknote = styled.div<BanknoteType>`
  background-color: ${props=>props.color}; 
  width: 200px;
  height: 100px;
  margin: 5px;
`

const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`
