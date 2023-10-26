import json
from datetime import datetime

def lambda_handler(event, context):
    now = datetime.now()
    current_time = now.strftime("%d/%m/%Y y son las %H:%M:%S")
    response = {
        "status": 200,
        "message": f"Hoy es {current_time}"
    }
    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
