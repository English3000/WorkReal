json.extract! @role, :id, :user_id, :title, :location, :start_date,
                     :end_date, :industry, :review
json.project_ids do
  json.array! @role.project_ids.reverse
end
json.real_ids do
  json.array! @role.real_ids.reverse #redundancy
end
