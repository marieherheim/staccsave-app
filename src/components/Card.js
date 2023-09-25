/* Lager en gjenbrukbar UI komponent, har dette som en "default layout" for bokser som jeg skal bruke i prosjektet,
deretter customizer jeg boksene andre plasser. Dette gjør jeg for å få konsekvent styling på komponentene */

export const Card = (props) =>{

    const baseClasses = "flex flex-col justify-center items-center space-y-4"; // Elementer inne i card vil bli sentrert horisontalt og vertikalt, arrangert i en kolonne, og ha en jevn avstand mellom dem.
    const classes = baseClasses + " " + (props.className || "");
    return (
        <div className={classes}>{props.children}</div> // Ønsker å kunne ha andre elementer og komponenter inne i boksen
    );
}


