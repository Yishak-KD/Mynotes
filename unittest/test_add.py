#!/usr/bin/python3
import unittest
from add import sum


class Testing(unittest.TestCase):
    def test_add(self):
        result = sum(20, 30)
        self.assertEqual(result, 50)

    def test_add_1(self):
        result = sum(100, -30)
        self.assertEqual(result, 70)

    def test_add_2(self):
        result = sum(-20, -30)
        self.assertEqual(result, -50)

# sum1 = sum(20, 30)
# sum2 = sum(100, -30)
# sum3 = sum(-20, 30)
