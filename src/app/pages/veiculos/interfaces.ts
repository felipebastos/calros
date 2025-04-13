export interface Veiculo {
  id: string;
  valor: string;
}

export type VeiculoNovo = Omit<Veiculo, 'id'>;
