import db from "@/db";

export default class request {
  getAllScores(scores, totalScore) {
    var scoreSum = 0
    db.collection("scores")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          scores.push(doc.data());
          //Obtener el score total
          scoreSum = parseInt(doc.data().score + scoreSum);
        });
        totalScore.push(scoreSum);
        console.log("totalScore: " + scoreSum);
      });
  }

  getAllContract(allContract) {
    var contractSum = 0
    db.collection("scores").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        contractSum += 1;
      });
      allContract.push(contractSum)
    });
  }

  getScore(contractName, contractScore) {
    // Obtener datos por ID
    let contractRef = db.collection("scores").doc(contractName);
    contractRef.get().then(doc => {
      if (doc.exists) {
        contractScore.push(doc.data().score);
        // contractScore.push(doc.data());
        // console.log(contractScore['0'])
      }
    });
  }

  UpdateScore(contractName, contractScore) {
    let contractRef = db.collection("scores").doc(contractName);
    // Modificar datos de una ID concreta
    contractRef.set({
      name: contractName,
      score: (parseInt(contractScore['0']) + 1)
    }).then(() => {
      console.log("Se ha actualizado correctamente");
    }).catch((error) => {
      console.log("Se ha producido un error: ", error);
    })
  }
}
