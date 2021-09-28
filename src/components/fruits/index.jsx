//importando useSelector do react-redux

import { makeStyles } from "@material-ui/core";
import Card from "../card";
import { useSelector } from "react-redux";
const FruitsPage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "20px",
      flexDirection: "column",
      backgroundColor: "#F0F0F0",
    },
  }));

  const classe = useStyles();
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className={classe.root}>
      {fruits.map((fruit) => (
        <Card fruta={fruit} />
      ))}
    </div>
  );
};

export default FruitsPage;
