# CODTECH Internship - Task 3: Kubernetes Deployment

This repository contains the work for **Task 3** of the CODTECH DevOps Internship program. The objective was to deploy a microservices-based application onto a Kubernetes cluster.

---

## Objective
To define, containerize, and deploy a simple two-tier web application using Kubernetes, demonstrating a fundamental understanding of Kubernetes resources like **Deployments** and **Services**.

---

## Application Architecture
The application is composed of two simple microservices:

- **Frontend**: A basic Nginx web server that serves a static `index.html` file.  
- **Backend**: A simple Node.js Express application that exposes a single API endpoint.

This architecture mimics a real-world scenario where a user-facing application communicates with a backend service.

---

## Tools and Technologies Used
- **Git & GitHub**: For version control and code hosting.  
- **Docker**: To containerize the frontend and backend applications using Dockerfiles.  
- **Docker Hub**: Used as a container registry to host the images, making them accessible to the Kubernetes cluster.  
- **Kubernetes (K8s)**: The container orchestrator used to manage and run the application.  
- **Killercoda**: A browser-based Kubernetes playground that was used to overcome local network configuration issues with Minikube.  

---

## Process Overview
1. **Containerization**: Each service (frontend and backend) has its own Dockerfile that defines the steps to build a runnable container image.  
2. **Image Registry**: The built Docker images were tagged and pushed to Docker Hub to ensure they could be pulled by any node in the Kubernetes cluster.  
3. **Kubernetes Manifests**: The deployment was defined using four YAML configuration files:
   - `frontend-deployment.yaml`: Instructs Kubernetes how to run the frontend container, specifying the image to use and the number of replicas.  
   - `frontend-service.yaml`: Exposes the frontend deployment to the internet using a NodePort, making it accessible from outside the cluster.  
   - `backend-deployment.yaml`: Defines the deployment for the backend API container.  
   - `backend-service.yaml`: Exposes the backend within the cluster using a ClusterIP service, allowing other services (like the frontend) to communicate with it.  

---

## Troubleshooting & Learnings
A significant part of this task involved troubleshooting a common real-world problem. Initially, a local Minikube cluster was set up, but persistent DNS and networking issues within the virtual environment prevented Docker from pulling base images.

**Resolution**:  
To overcome this, the environment was shifted to **Killercoda**, a browser-based Kubernetes playground. This provided a stable, pre-configured environment.  

This also led to solving another real-world challenge: images built on one node are not available on others. The solution was to use a **central registry (Docker Hub)** to store the images, which is standard practice in production environments.

---

## Deliverables
The YAML configuration files (`frontend-deployment.yaml`, `frontend-service.yaml`, `backend-deployment.yaml`, `backend-service.yaml`) located in this repository serve as the primary deliverable, documenting the successful deployment of the application on a Kubernetes cluster.
