FROM nginx:1.19.2-alpine

# copy built assets to nginx root
COPY dist /usr/share/nginx/html

# expose port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]