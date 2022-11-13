#!/usr/bin/python3
"""Querying using the python MySQLdb module """
import MySQLdb
import sys

conn = MySQLdb.connect(host=sys.argv[1], port=3306, user=sys.argv[2], passwd=sys.argv[3], db=sys.argv[4], charset="utf8")
cur = conn.cursor()
cur.execute("SELECT * FROM states ORDER BY id ASC") # HERE I have to know SQL to grab all states in my database
query_rows = cur.fetchall()
for row in query_rows:
    print(row)
cur.close()
conn.close()
