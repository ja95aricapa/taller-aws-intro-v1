import json

def lambda_handler(event, context):
    movies = [
        "El Padrino", "Forrest Gump", "El Caballero de la Noche",
        "Pulp Fiction", "La Lista de Schindler", "Matrix",
        "El Señor de los Anillos: El Retorno del Rey", "La Guerra de las Galaxias: Episodio V - El Imperio Contraataca",
        "Inception", "El Señor de los Anillos: La Comunidad del Anillo",
        "El Club de la Pelea", "Parque Jurásico", "El Señor de los Anillos: Las Dos Torres",
        "Titanic", "Guardianes de la Galaxia", "Interstellar",
        "El Origen", "Coco", "Gladiador", "Django sin Cadenas"
    ]
    response = {
        "status": 200,
        "message": movies
    }
    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
