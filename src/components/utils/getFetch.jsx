const API_KEY = "api_key=649b8663c34d6381caf605aeaa50ecfd";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";



//

let productos = [{id: 1, titulo: "The Notebook", genero: "romanticas", precio: 20, img: "https://i.pinimg.com/564x/9d/15/84/9d15844e964cacbcf87780471bed7ae0.jpg", synopsis: 'En un hogar de retiro un hombre le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40, y de cómo fueron separados por terceros, y por la guerra.', sala: 'Donatello - Recoleta'}, {id: 2, titulo: "El Papel de sus vidas", genero: "comedias", precio: 20, img: "https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/08/papel-de-sus.jpg?w=1112&ssl=1", synopsis: 'Una actriz que se ha realizado una cirugía plástica que no ha sido un éxito, decide contratar a una doble para reemplazarla en su próximo rodaje',sala: 'Hollywood - Palermo'}, {id: 3, titulo: "El Orfanato", genero: "drama", precio: 15, img: "https://cdn.peoople.app/image/recommendation/1311582/1311582_260620223827_opt_520.jpg", synopsis: 'Laura se instala con su familia en el orfanato en el que creció de niña. Su propósito es abrir una residencia para niños discapacitados, pero su hijo desaparece y sus planes se desvanecen. Varios meses después de la desaparición, Laura escucha voces de espíritus y se convence de que ellos le pueden ayudar a encontrar a su hijo.', sala: 'Donatello - Recoleta'}, {id: 4, titulo: "Wonder", genero: "drama", precio: 7, img: "https://cdn.peoople.app/image/recommendation/00090741-2450-4511-addc-36504aa05b0b/00090741-2450-4511-addc-36504aa05b0b_190121093006_opt.jpg", synopsis: 'Auggie Pullman tiene 10 años y sueña con convertirse en astronauta algún día. Nació con una grave malformación facial y tuvo que someterse a diez años de operaciones y largos periodos de recuperación en casa. Ahora Auggie debe enfrentarse a otro gran reto: asistir a clase por primera vez.', sala: 'Picasso - Recoleta' }, {id: 5, titulo: "Daredevil", genero: "series", precio: 17, img: "https://www.sopitas.com/wp-content/uploads/2015/03/karen-poster.jpg", synopsis: 'Matt Murdock, ciego desde niño, lucha contra la injusticia en Cocina del Infierno, Nueva York, de día como abogado y de noche como el superhéroe Daredevil. Ve todo lo que quieras.', sala: 'Access Online'}, {id: 6, titulo: "Diego Maradona", genero: "documentales", precio: 12, img: "https://i.pinimg.com/564x/ff/80/6f/ff806fca6857d74ceaa2f2fae0644a7c.jpg", synopsis: 'El 5 de julio de 1984, Diego Maradona llegó a Nápoles luego de un pago récord. El futbolista más icónico del mundo y una de las ciudades más apasionadas y peligrosas de Europa conformaron una dupla ideal.',sala: 'Raphael - Recoleta'}, {id: 7, titulo: "Ronaldo", genero: "documentales", precio: 22, img: "https://www.cineycine.com/archivos/2015/09/ronaldo-el-documental-poster.jpg", synopsis: 'Las cámaras han acompañado al futbolista portugués Christiano Ronaldo durante más de un año (desde enero de 2014, cuando ganó su segundo Balón de Oro), con acceso sin precedentes a su círculo íntimo y profesional. A través de conversaciones y archivos de vídeo inéditos, se da una visión asombrosa de su vida personal y deportiva.', sala: 'Julio Verne - Recoleta'}, {id: 8, titulo: "Safe", genero: "suspenso", precio: 23, img: "https://www.elseptimoarte.net/carteles/341/safe_12870.jpg", synopsis: 'Luke Wright es un luchador de segunda categoría de las artes marciales mixtas, con una vida llena de palizas, rutina y un salario que es una miseria... hasta que un día se le presenta la oportunidad de un combate amañado. A partir de ese momento, su vida se convierte en un infierno después de que la mafia rusa mate a su familia, viéndose desterrado a vagar por las calles de Nueva York como un indigente más, atormentado por la culpa de las consecuencias de su acto', sala: 'Leonardo Da Vinci - Recoleta'}, {id: 9, titulo: "Ahora o Nunca", genero: "comedias", precio: 11, img: "http://www.estrenoscinema.es/wp-content/uploads/2015/04/ahora_nunca.jpg", synopsis: 'Eva y Alex, tras años de novios, deciden casarse en el pequeño pueblo de la campiña inglesa donde se conocieron. Sin embargo, se les presenta un problema inesperado: una huelga de controladores impide que Alex y sus invitados lleguen hasta donde está Eva.', sala: 'Picasso - Recoleta'}, {id: 10, titulo: "Sin rastro", genero: "suspenso", precio: 12, img: "https://www.elseptimoarte.net/carteles/341/sin_rastro_12871.jpg", synopsis: 'En la película Sin rastro (Gone), Jill Parrish llega un día a su casa después de trabajar un turno de noche y descubre que su hermana, Molly, ha sido secuestrada. Jill, que ya tiene experiencia en esa materia, tras haber logrado escapar de las garras de un asesino en serie que la secuestró un año antes, está convencida de que se trata del mismo individuo. La policía cree que Jill está loca, por lo que no se muestran muy dispuestos a malgastar sus recursos para ayudarla. Al temerse que Molly pueda estar muerta para la puesta de sol, Jill decide emprender por su cuenta una persecución para encontrar al asesino, sacar a la luz sus secretos y salvar a su hermana.', sala: 'Hollywood - Palermo'}];



export const getFetch = (id) => {
    return new Promise ((resolve, reject) => {

    setTimeout(() => {
        resolve(id ? productos.find(prod => prod.id === id ) : productos )
    }, 2000)

    console.log(productos)
    

})
   

}
  
// async function loadData() {

//     const response = await fetch(API_URL);
//     const data = await response.json();

 // console.log(data.results)

    

//     data.results.forEach((element) => {
//         console.log(element.title);

     

//         let li = document.createElement("h5");
//         li.innerText = `Titulo: ${element.title}`;
//        document.body.appendChild(li);

//         let release = document.createElement('h6')
//         release.innerText = `Fecha de lanzamiento: ${element.release_date}`
//         ;
//         document.body.append(release);

//         const seeMovies = document.createElement("img");
//         seeMovies.src = IMG_URL + element.backdrop_path;
//        document.body. append(seeMovies);

   
//     })
    
// }loadData()  