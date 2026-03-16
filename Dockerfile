#--------- Stage 1: Build --------#

FROM node:20-alpine AS builder

WORKDIR /app

# copiar dependencias
COPY package*.json ./

# instalar dependencias
RUN npm install 

#aqui se copia todo mi proyecto dentro de app del folder
COPY .  .

# aqui next.j hace next build  y se crea la carpeta.next
RUN npm run build 

# ---------- production stage ----------

  FROM node:20-alpine 

  WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules


EXPOSE 3000

CMD [ "npm", "start" ]

