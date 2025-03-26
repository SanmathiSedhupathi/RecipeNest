# Recipe Sharing Website

This project is a Recipe Sharing Website that allows users to share and discover recipes. It is built using HTML, CSS, and JavaScript, and is designed to be deployed using Docker and Kubernetes.

## Project Structure

The project has the following structure:

```
recipe-sharing-website
├── build
│   ├── html files (blog.html, chef.html, etc.)
│   ├── css
│   ├── images
│   └── js
├── Dockerfile
├── Jenkinsfile
├── kubernetes
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── prometheus
│   ├── prometheus.yml
│   └── alert_rules.yml
├── grafana
│   ├── datasources
│   │   └── datasource.yml
│   └── dashboards
│       └── dashboard.json
└── README.md
```

## Getting Started

### Prerequisites

- Docker
- Kubernetes (Minikube)
- Jenkins
- Prometheus
- Grafana

### Building the Docker Image

To build the Docker image for the Recipe Sharing Website, run the following command in the root directory of the project:

```
docker build -t <your-dockerhub-username>/recipe-sharing-website .
```

### Pushing the Docker Image to Docker Hub

After building the image, push it to Docker Hub using:

```
docker push <your-dockerhub-username>/recipe-sharing-website
```

### Deploying to Kubernetes

1. Start Minikube:

```
minikube start
```

2. Apply the Kubernetes configurations:

```
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
kubectl apply -f kubernetes/ingress.yaml
```

### Monitoring with Prometheus and Grafana

1. Configure Prometheus by applying the configuration file:

```
kubectl apply -f prometheus/prometheus.yml
```

2. Set up Grafana and configure the data source to connect to Prometheus.

3. Import the dashboard configuration from `grafana/dashboards/dashboard.json` to visualize metrics.

## Usage

Once deployed, you can access the Recipe Sharing Website through the configured ingress. Users can log in, share recipes, and interact with the community.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.