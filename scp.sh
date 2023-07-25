npm run build

scp -i "/Users/yuseonghyeon/My-Server-KEY.pem" -r /Users/yuseonghyeon/workspace/settlement-view/dist ec2-user@15.164.165.223:/app/vue

#ssh -i "/Users/yuseonghyeon/My-Server-KEY.pem" ec2-user@15.164.165.223 sudo systemctl restart nginx
