# Create your tests here.
from django.test import TestCase
from django.urls import reverse


class HealthTest(TestCase):
    def test_health_endpoint_returns_ok(self):
        response = self.client.get(reverse("health"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ok")
