import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";

export const useCard = (id) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const getCard = async () => {
      const { data } = await cardsService.getCart(id);

      setCard(data);
    };

    getCard();
  }, [id]);

  return card;
};
