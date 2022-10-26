package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	route := mux.NewRouter()

	route.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	route.HandleFunc("/indonesia", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Halo Dunia!"))
	})

	route.HandleFunc("/italia", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Ciao Mondo!"))
	})

	fmt.Println("Server running on port 5000")
	http.ListenAndServe("localhost:5000", route)
}