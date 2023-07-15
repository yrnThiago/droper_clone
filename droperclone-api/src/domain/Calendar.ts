export const DATES = {
  anos: [
    {
      numero: 2023,
      titulo: "2023"
    },
    {
      numero: 2022,
      titulo: "2022"
    },
    {
      numero: 2021,
      titulo: "2021"
    },
    {
      numero: 2020,
      titulo: "2020"
    },
    {
      numero: 2019,
      titulo: "2019"
    },
    {
      numero: 2018,
      titulo: "2018"
    },
    {
      numero: 2017,
      titulo: "2017"
    },
    {
      numero: 2016,
      titulo: "2016"
    },
    {
      numero: 2015,
      titulo: "2015"
    },
    {
      numero: 2014,
      titulo: "2014"
    },
    {
      numero: 2013,
      titulo: "2013"
    },
    {
      numero: 2012,
      titulo: "2012"
    },
    {
      numero: 2011,
      titulo: "2011"
    },
    {
      numero: 2010,
      titulo: "2010"
    },
    {
      numero: 2009,
      titulo: "2009"
    },
    {
      numero: 2008,
      titulo: "2008"
    },
    {
      numero: 2007,
      titulo: "2007"
    },
    {
      numero: 2006,
      titulo: "2006"
    },
    {
      numero: 2005,
      titulo: "2005"
    },
    {
      numero: 2004,
      titulo: "2004"
    },
    {
      numero: 2003,
      titulo: "2003"
    },
    {
      numero: 2002,
      titulo: "2002"
    },
    {
      numero: 2001,
      titulo: "2001"
    },
    {
      numero: 2000,
      titulo: "2000"
    },
    {
      numero: 1999,
      titulo: "1999"
    },
    {
      numero: 1998,
      titulo: "1998"
    },
    {
      numero: 1997,
      titulo: "1997"
    },
    {
      numero: 1996,
      titulo: "1996"
    },
    {
      numero: 1995,
      titulo: "1995"
    },
    {
      numero: 1994,
      titulo: "1994"
    },
    {
      numero: 1993,
      titulo: "1993"
    },
    {
      numero: 1992,
      titulo: "1992"
    },
    {
      numero: 1991,
      titulo: "1991"
    },
    {
      numero: 1990,
      titulo: "1990"
    },
    {
      numero: 1989,
      titulo: "1989"
    },
    {
      numero: 1988,
      titulo: "1988"
    },
    {
      numero: 1987,
      titulo: "1987"
    },
    {
      numero: 1986,
      titulo: "1986"
    },
    {
      numero: 1985,
      titulo: "1985"
    }
  ],
  meses: [
    {
      numero: 1,
      titulo: "JAN"
    },
    {
      numero: 2,
      titulo: "FEV"
    },
    {
      numero: 3,
      titulo: "MAR"
    },
    {
      numero: 4,
      titulo: "ABR"
    },
    {
      numero: 5,
      titulo: "MAI"
    },
    {
      numero: 6,
      titulo: "JUN"
    },
    {
      numero: 7,
      titulo: "JUL"
    },
    {
      numero: 8,
      titulo: "AGO"
    },
    {
      numero: 9,
      titulo: "SET"
    },
    {
      numero: 10,
      titulo: "OUT"
    },
    {
      numero: 11,
      titulo: "NOV"
    },
    {
      numero: 12,
      titulo: "DEZ"
    }
  ]
};

export interface DateType {
  numero: number;
  titulo: string;
};

export interface Dates {
  anos: DateType[];
  meses: DateType[];
};

export interface CalendarItem {
  id: number;
  nomeMarca: string | null;
  logoMarca: string | null;
  titulo: string;
  icone: string;
  url: string;
  query: string;
  precoRetail: string;
  precofRetail: number;
  forceCompraPro: boolean;
  dataLancamentoMes: string;
  dataLancamentoDia: string;
  dataLancamentoAno: string;
  dataLancamentoAnoAbrev: string;
  isTenis: boolean;
}

export type CalendarOrderType = {
  [K in keyof CalendarItem]?: "ASC" | "DESC";
};

export type filterKeyType = {[K in "retail" | "maisvistos" | "maisantigos" | "maisrecentes"]?: CalendarOrderType};
