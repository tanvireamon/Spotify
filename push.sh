while CMD= read -r line; do 
eval "$line"
done < push.txt
