 let compteur = 2, i = 0, nombre =[10, 20, 30] ;
       let a = 5, b = 10;


       console.log(`Table de multiplication de ${compteur}:`)
       for(i = 0; i< 11; i++){
        console.log(`${compteur} x ${i} = ${compteur * i}`);
         };

        for (let nb of nombre){
            if(nb > 15) console.log(nb);
         }

        function addition(a, b){
            return a + b;
        }

        console.log(addition(a,b));

        const multiplier = (a, b) => a * b; //Fonction flechée

        console.log(multiplier(3, 15));

        //Fonction est paire
        function estPair(n){
          return  n % 2 === 0;
        }

        console.log(estPair(10));

        let tasks = ["Apprendre JS", "Faire du Sport", "Apprendre PHP"];

        //Ajouter une tâche
        function addTask(task){
            tasks.push(task);
        }
     
        addTask('Apprendre Symfony')
        addTask('Apprendre React')

            //Supprimer une tâche
        function deleteTask(index){
            tasks.splice(index, 1);
        }
        addTask('Lire un Livre')
        deleteTask(0)

        console.log(tasks);


    