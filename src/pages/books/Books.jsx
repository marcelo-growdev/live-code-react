import React from 'react';

function Books() {
  const data = [];

  return (
    <div>
      <h1 className="text-3xl font-bold underline animate-pulse text-lime-300">
        BOOKS
      </h1>
      {data.length && (
        <>
          {data.map((item) => {
            return (
              <div>
                <h1>{item}</h1>
                <p>Tem conteúdo</p>
              </div>
            );
          })}
          <p>
            <button type="button">finalizar pedido</button>
          </p>
        </>
      )}

      {!data.length && (
        <div>
          <p>Carrinho fazio.</p>
        </div>
      )}
    </div>
  );
}

export default Books;
