import * as PropTypes from 'prop-types';
import * as React from 'react';
import { FormularioContainer, PedidoContainer } from './styles';
import { Pedido } from '../../models/Pedido';
import { TarjetaProductoSolicitado } from '../TarjetaProductoSolicitado';

export interface ListaPedidoProps {
  pedido: Pedido;
  onClickFinalizarPedido: (pedido: Pedido) => void;
  eliminarProductoSolicitado: (idProductoSolicitado: number) => void;
}

export const ListaPedido: React.FC<ListaPedidoProps> = ({
  pedido,
  onClickFinalizarPedido,
  eliminarProductoSolicitado,
}) => {

  const [finalizarPedidoClicked, setFinalizarPedidoClicked] = React.useState(false);
  return (
    <PedidoContainer>
      {pedido.productosSolicitados && pedido.productosSolicitados.map((producto, index) => {
        return (
          <TarjetaProductoSolicitado 
              key={index} 
              productoSolicitado={producto}
              onClickPersonalizarProducto={()=>{
                
              }}
              eliminarProductoSolicitado={(idProductoSolicitado: number) => {
                eliminarProductoSolicitado(idProductoSolicitado);
              }}
          />
        );
      })}      
    </PedidoContainer>
  );
};

ListaPedido.propTypes = {
  pedido: PropTypes.any.isRequired,
  onClickFinalizarPedido: PropTypes.func.isRequired,
  eliminarProductoSolicitado: PropTypes.func.isRequired,
};
