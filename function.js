// Dans ce point de contrôle, nous verrons les sujets suivants : itérer avec async/await, 
// attendre un appel, gérer les erreurs avec async/await, enchaîner async/await, attendre 
// des requêtes concurrentes et attendre des appels parallèles:

// Choisissez au moins 3 tâches à résoudre.

// Tâche 01:

// Itérer avec Async/Await: Ecrire une fonction async iterateWithAsyncAwait qui prend 
// un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.



// async function iterateWithAsyncAwait(array) {
//     for (let value of array) {
//         await new Promise(resolve => setTimeout(() => {
//             console.log(value);
//             resolve();
//         }, 1000));
//     }
//     console.log('Valeurs enregistrées avec succès');
// }

// let values = [1, 2, 3, 4, 5];
// console.log(iterateWithAsyncAwait(values)

// );

// Tâche 02:

// Attendre un appel: Créer une fonction asynchrone awaitCall qui simule
//  l'obtention de données à partir d'une API. Utilisez await pour attendre
//   la réponse de l'API, puis enregistrez les données.

// async function awaitCall() {
//     async function awaitCall() {
//         try {
//             // Simuler un appel API avec un délai
//             let response = await new Promise(resolve => setTimeout(() => {
//                 resolve({ data: 'Données simulées de l\'API' });
//             }, 2000)); // Délai de 2 secondes
    
//             // Enregistrer les données
//             console.log('Données reçues:', response.data);
//         } catch (error) {
//             console.error('Erreur lors de l\'obtention des données:', error);
//         }
//     }

// }


// console.log( awaitCall());

// Tâche 03:

// Gérer les erreurs avec Async/Await:Modifiez la fonction awaitCall pour 
// gérer les erreurs de manière élégante. Si l'appel à l'API échoue, attrapez 
// l'erreur et enregistrez un message d'erreur convivial.

// async function awaitCall() {
//     try {
//         // Simuler un appel API avec un délai
//         let response = await new Promise((resolve, reject) => setTimeout(() => {
//             // Simuler une erreur aléatoire
//             if (Math.random() > 0.5) {
//                 resolve({ data: 'Données simulées de l\'API' });
//             } else {
//                 reject(new Error('Erreur simulée de l\'API'));
//             }
//         }, 2000)); // Délai de 2 secondes

//         // Enregistrer les données
//         console.log('Données reçues:', response.data);
//     } catch (error) {
//         // Gérer l'erreur et afficher un message convivial
//         console.error('Erreur lors de l\'obtention des données:', error.message);
//     }
// }

// console.log(awaitCall());


// Chaîner Async/Await: Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones 
// distinctes de manière séquentielle. Chaque fonction doit enregistrer un message après un délai d'une seconde.
//  Enchaînez ces fonctions en utilisant await.

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function asyncFunction1() {
//     await delay(1000);
//     console.log('Fonction 1 exécutée après 1 seconde');
// }

// async function asyncFunction2() {
//     await delay(1000);
//     console.log('Fonction 2 exécutée après 1 seconde');
// }

// async function asyncFunction3() {
//     await delay(1000);
//     console.log('Fonction 3 exécutée après 1 seconde');
// }

// async function chainedAsyncFunctions() {
//     await asyncFunction1();
//     await asyncFunction2();
//     await asyncFunction3();
//     console.log('Toutes les fonctions ont été exécutées séquentiellement');
// }

// console.log(chainedAsyncFunctions());



// Tâche 04:

// Attente de requêtes simultanées: Créez une fonction asynchrone concurrentRequests qui effectue deux appels
//  API simultanément en utilisant Promise.all(). Enregistrez les résultats combinés une fois les deux requêtes résolues.

// async function concurrentRequests() {
//     try {
//         // Effectuer deux appels API simultanément
//         let [response1, response2] = await Promise.all([
//             fetch('https://api.example.com/data1').then(response => response.json()),
//             fetch('https://api.example.com/data2').then(response => response.json())
//         ]);

//         // Enregistrer les résultats combinés
//         console.log('Données de la première API:', response1);
//         console.log('Données de la deuxième API:', response2);
//     } catch (error) {
//         console.error('Erreur lors des appels API:', error);
//     }
// }

// console.log(concurrentRequests());



// Tâche 05:

// Attente des appels parallèles:Écrivez une fonction parallelCalls qui prend un tableau d'URL et récupère les
//  données de chaque URL simultanément en utilisant Promise.all(). Enregistrez les réponses une fois que toutes les requêtes sont terminées.

async function parallelCalls(urls) {
    try {
        // Effectuer les appels API simultanément
        let responses = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));

        // Enregistrer les réponses
        responses.forEach((data, index) => {
            console.log(`Données de l'URL ${index + 1}:`, data);
        });
    } catch (error) {
        console.error('Erreur lors des appels API:', error);
    }
}

let urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
];

console.log(parallelCalls(urls));

