CREATE DATABASE dbRestaurant;
USE dbRestaurant;
CREATE TABLE PEDIDO (
      IDPED INT AUTO_INCREMENT,
      USERPED VARCHAR(80),
      EMAUSED VARCHAR(80),
      CELUSPED CHAR(9),
      FOODPED VARCHAR(80),
      MSGPED VARCHAR(250),
      PRIMARY KEY (IDPED)
);
INSERT INTO PEDIDO (
            USERPED,
            EMAUSED,
            CELUSPED,
            FOODPED,
            MSGPED
      )
VALUES (
            'Josè Ramirez',
            'jose.ramirez@outlook.com',
            '974815236',
            'Arroz con Pollo',
            'Por favor enviar a la dirección Av.Miraflores 253, San Vicente de Cañete'
      ),
      (
            'Ana Guerra Solano',
            'ana.guerra@gmail.com',
            '981526321',
            'Sopa Seca de Gallina',
            'Necesito 4 platos'
      );
SELECT *
FROM PEDIDO;