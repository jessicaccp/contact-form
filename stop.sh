#!/bin/bash
kill $(lsof -i:8000 | awk '{print $2}' | tail -n +2)
kill $(lsof -i:8001 | awk '{print $2}' | tail -n +2)