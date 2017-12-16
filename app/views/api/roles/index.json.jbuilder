@roles.each do |role|
  # I don't think we'd ever use fetchRole or the show view
  # rather, upon the RealIndex's mounting, we'll fetch users within
    # a radius of the currentUser's current role's zip code
  # and whenever we make a search query, we'll add the new users that
    # meet it to the state (instead of dropping the roles we already have fetched)
end

# expo not working at my apt's IP
