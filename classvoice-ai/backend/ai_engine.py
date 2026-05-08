from sklearn.cluster import KMeans

sample_data = [
    [80, 70],
    [20, 15],
    [60, 65]
]

model = KMeans(n_clusters=2)
model.fit(sample_data)

print(model.labels_)