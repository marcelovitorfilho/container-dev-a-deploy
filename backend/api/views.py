from django.http import JsonResponse


def health(request):
    return JsonResponse({
        'status': 'ok',
        'message': 'Backend is running with Docker',
    })