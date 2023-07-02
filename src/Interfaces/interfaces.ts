import { defineProps, ref } from "vue";

export interface Drop {
  id: number;
  idMarca: number | null;
  idModelo: number | null;
  nomeMarca: string | null;
  urlMarca: string | null;
  logoMarca: string | null;
  siteMarca: string | null;
  titulo: string;
  icone: string;
  gif3d: string | null;
  foto: string;
  isAtivo: boolean;
  legitAtivo: boolean;
  disponivel: boolean;
  isLancamento: boolean;
  forceCompraAutenticada: boolean;
  modelo3d: string | null;
  preview3d: string | null;
  dataLancamento: string;
  dataHoraCriacao: string;
  dataLancamentoMes: string;
  dataLancamentoDia: string;
  dataLancamentoAno: string;
  dataLancamentoAnoAbrev: string;
  url: string;
  site: string;
  query: string;
  descricao: string | null;
  path: string;
  sku: string;
  temColecaoImagens: boolean;
  colecaoImagens: string[] | null;
  retail: number;
  minPriceDiario: number;
  minPriceText: string;
  retailText: string;
  palavraRetail: string | null;
  isEletronico: boolean;
  dadosCorPrincipal: {
    nome: string;
    hex: string;
    key: string;
  };
  showVariacaoCor: boolean;
  listaPossiveisAvarias: string[] | null;
}

export interface DropItem {
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

export interface Drops {
  drops: DropItem[];
}

export interface AdditionalBtns {
  id: number;
  icon: string;
  route: string;
}

export interface VendaInfo {
  id: number;
  mode: number;
  status: number;
  precoCobrado: number;
  precoCobradoText: string;
  codigoRastreio: null | string;
  nomeComprador: string;
  temMensagem: boolean;
  dataHoraCriacao: string;
  telefoneVendedor: null | string;
  tipoFrete: number;
  temEndereco: null | unknown;
  idEndereco: number;
  modoExpress: boolean;
  identificadorServicoFrete: string;
  urlEtiqueta: null | string;
  temPedidoLoggi: boolean;
  precoApresentacao: string;
  precoFrete: string;
  precoProduto: string;
  compraAutomatica: boolean;
  isTransacionado: boolean;
  diasLiberacao: number;
  isLiberado: boolean;
  isSacado: boolean;
  Produto: {
    id: number;
    idTipoProduto: number;
    idDrop: number;
    idMarca: null | number;
    tituloTipoProduto: null | string;
    moeda: string;
    preco: string;
    precoCusto: string;
    nome: string;
    linkfoto: string;
    fotoPrincipal: string;
    isAtivo: boolean;
    isVendido: boolean;
    visitas: number;
    isNovo: boolean;
    isOriginal: boolean;
    condicaoDescricao: string;
    dropIcon: string;
    descricao: null | string;
    statusBox: string;
    Vendedor: null;
    TamanhoProdutoSelecao: string[];
  };
  statusInteresse: {
    id: number;
    status: string;
    cor: string;
    textoBranco: boolean;
    descricao: string;
  };
  Endereco: null;
  TamanhoSelecionado: {
    id: number;
    idTipoProduto: number;
    titulo: string;
    tituloUs: string;
  };
  statusVenda: null;
  isTracked: boolean;
  cartMode: number;
  carrinhoHabilitado: boolean;
  isCarrinho: boolean;
  Itens: null;
  totalItens: number;
  mostraIndisponibilidade: boolean;
  temItensIndisponiveis: boolean;
  isConcierge: boolean;
  isConciergeEntregaNaLoja: boolean;
  ganhoVendedor: null;
  taxaStr: string;
  tags: any[];
}

export interface ProductSuggest {
  id: number;
  idMarca: null;
  idModelo: null;
  nomeMarca: null;
  urlMarca: null;
  logoMarca: null;
  siteMarca: null;
  titulo: string;
  icone: string;
  gif3d: null;
  foto: null;
  isAtivo: boolean;
  legitAtivo: boolean;
  disponivel: boolean;
  isLancamento: boolean;
  forceCompraAutenticada: boolean;
  modelo3d: null;
  preview3d: null;
  dataLancamento: string;
  dataHoraCriacao: string;
  dataLancamentoMes: null;
  dataLancamentoDia: null;
  dataLancamentoAno: null;
  dataLancamentoAnoAbrev: null;
  url: null;
  site: null;
  query: string;
  descricao: null;
  path: null;
  sku: null;
  temColecaoImagens: boolean;
  colecaoImagens: null;
  retail: null;
  minPriceDiario: null;
  minPriceText: null;
  retailText: null;
  palavraRetail: null;
  isEletronico: boolean;
  dadosCorPrincipal: null;
  showVariacaoCor: boolean;
  listaPossiveisAvarias: null;
}

export interface Collection {
  id: number;
  idDrop: number;
  url: string;
  mode: number;
  wallpaperDesktop: string;
  wallpaperMobile: string;
  termo: null;
  dropCollection: string;
  titulo: string;
  subtitulo: string;
  hexColor: null;
  descricao: string;
  showInHome: boolean;
  isAtivo: boolean;
  temLinkColecao: boolean;
  tipoCard: string;
  _dataHoraCriacao: Date;
  dataHoraCriacaoText: string;
  path: string;
  drop: Drop | null;
  drops: Drops | null
}

export interface Tamanho {
  id: number;
  idTipoProduto: number;
  titulo: string;
  tituloUs: string;
}

export interface TipoDeProduto {
  id: number;
  titulo: string;
  tituloUs: string;
  imagem: string;
  temTamanhos: boolean;
  categoria: number;
  descricaoCategoria: string;
  peso: number;
  altura: number;
  comprimento: number;
  largura: number;
  displayPeso: string;
  displayAltura: string | null;
  displayComprimento: string | null;
  displayLargura: string | null;
  isEletronico: boolean;
  dadosPacoteCompleto: boolean;
  Tamanhos: Tamanho[];
  opcoesPacote: any[];
}

export interface Dates {
  anos: DateType[];
  meses: DateType[];
}

export interface DateType {
  numero: number;
  titulo: string;
}


