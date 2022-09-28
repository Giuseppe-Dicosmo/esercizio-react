import React from "react";
import Navbar from "../navbar/Navbar";
import CardProdotti from "../cardProdotti/CardProdotti";
import CardNonCaricata from "../cardProdotti/CardNonCaricata";

import "./IndecisionApp.css";

import { useEffect } from "react";
import { useState } from "react";

const IndecisionApp = () => {
  const [users, setUsers] = useState(() => []);
  const [user, setUser] = useState(() => {});
  const [loading, setLoading] = useState(() => false);

  function gestoreProdotti() {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((res) => {
        setUsers(res.products);
        setLoading((p) => !p);
      })
      .catch((err) => console.error(err));
  }

  function gestoreProdotto(id) {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
        setLoading(true);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    console.log(`prova ${JSON. stringify(user)}`)
  }, [user]);

  const handleCaricaProdotto = async (event) => {
    await event.preventDefault();
    const utenti = await gestoreProdotto(event.target.elements.inputId.value);
    await setUser(utenti);
  };

  return (
    <div>
      <Navbar
        mostraProdotti={gestoreProdotti}
        mostraProdotto={handleCaricaProdotto}
      />

      <ul className="d-flex flex-wrap justify-content-center gap-5">
        {!loading
          ? user && <CardNonCaricata />
          : user && <CardProdotti prodotto={user} />}

        {users.map((p) =>
          !loading ? (
            <CardNonCaricata />
          ) : (
            <CardProdotti key={p.id} prodotto={p} />
          )
        )}
      </ul>
    </div>
  );
};

export default IndecisionApp;
