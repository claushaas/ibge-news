import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type News = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  produto_id: number,
  produtos: string,
  editorias: string,
  imagens: string,
  produtos_relacionados: string,
  destaque: boolean,
  link: string,
};

export type NewsArray = News[];

export type ReduxState = {
  news: News[],
  favorites: number[],
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
